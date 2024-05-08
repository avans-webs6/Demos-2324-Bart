import { Injectable } from '@angular/core';
import { Festival } from './models/festival.model';
import { Observable, Subscriber } from 'rxjs';

import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, onSnapshot, collection, doc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  firestore: Firestore;

  constructor() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBN0_8qekmPsRsFu25KZXcohTrSAMlFoLc",
      authDomain: "adweb-demos-2324.firebaseapp.com",
      projectId: "adweb-demos-2324",
      storageBucket: "adweb-demos-2324.appspot.com",
      messagingSenderId: "422174854700",
      appId: "1:422174854700:web:ce7a6aaa8cbeffa1ea8b89"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    this.firestore = getFirestore(app);
  }

  getFestivals(): Observable<Festival[]> {
    return new Observable((subscriber: Subscriber<any[]>) => {
      onSnapshot(collection(this.firestore, 'festivals'), (snapshot) => {
        let festivals: any[] = [];
        snapshot.forEach((doc) => {
          let festival = doc.data();
          festival['id'] = doc.id;
          festivals.push(festival);
        });
        subscriber.next(festivals);
      });
    });
  }

  getFestival(id: string): Observable<Festival | undefined> {
    return new Observable((subscriber: Subscriber<any>) => {
      if (id == "") {
        subscriber.next(null);
      } else {
        onSnapshot(doc(this.firestore, "festivals", id), (doc) => {
          let festival = doc.data() ?? {};
          festival['id'] = doc.id;

          subscriber.next(festival);
        });
      }
    })
  }
}

