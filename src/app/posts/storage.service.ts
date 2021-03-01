import { Injectable, Inject } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  }

  get(key: string): string {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
      console.error("Error getting data from localStorage", err);
      return null;
    }
  }

  clear(): void {
    sessionStorage.clear();
  }
}
