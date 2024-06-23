import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  private db!: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toastController: ToastController) {
    this.initDatabase();
  }
   
  private async initDatabase(): Promise<void> {
    try {
      const db: SQLiteObject = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default'
      });
      this.db = db;
      await this.createTables();
      this.isDbReady.next(true);
      this.presentToast('Database created');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  private async createTables(): Promise<void> {
    try {
      await this.db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, password TEXT, nombre TEXT, apellido TEXT, email TEXT, pais TEXT)', []);
      this.presentToast('Table created');
    } catch (error) {
      this.presentToast('Error creating table: ' + error);
    }
  }

  private async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  private async ensureDbReady(): Promise<void> {
    if (!this.isDbReady.value) {
      await this.isDbReady.pipe(filter(ready => ready)).toPromise();
    }
  }

  async validarUsuario({ usuario, password }: { usuario: string; password: string; }): Promise<boolean> {
    await this.ensureDbReady();
    try {
      const data = await this.db.executeSql('SELECT * FROM users WHERE usuario = ? AND password = ?', [usuario, password]);
      if (data.rows.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      this.presentToast('Error searching user: ' + error);
      return false;
    }
  }

  async insertUsuario(usuario: string, password: string, nombre: string, apellido: string, email: string, pais: string): Promise<void> {
    await this.ensureDbReady();
    try {
      await this.db.executeSql('INSERT INTO users (usuario, password, nombre, apellido, email, pais) VALUES (?, ?, ?, ?, ?, ?)', [usuario, password, nombre, apellido, email, pais]);
      this.presentToast('User added');
    } catch (error) {
      this.presentToast('Error adding user: ' + error);
    }
  }

  getIsDBReady() {
    return this.isDbReady.asObservable();
  }
}
