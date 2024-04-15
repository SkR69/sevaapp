import { Injectable } from '@angular/core';
import { DropdownOption } from '../modal/generic';

@Injectable({
  providedIn: 'root'
})
export class GolbalService {

  alerts: any[] = [];
  loading = false;

  constructor() { }

  getNakshathras(): { label: string, value: string }[] {
    return [
      { label: 'Ashwini', value: 'ashwini' },
      { label: 'Bharani', value: 'bharani' },
      { label: 'Krittika', value: 'krittika' },
      { label: 'Rohini', value: 'rohini' },
      { label: 'Mrigashira', value: 'mrigashira' },
      { label: 'Ardra', value: 'ardra' },
      { label: 'Punarvasu', value: 'punarvasu' },
      { label: 'Pushya', value: 'pushya' },
      { label: 'Ashlesha', value: 'ashlesha' },
      { label: 'Magha', value: 'magha' },
      { label: 'Purva Phalguni', value: 'purva-phalguni' },
      { label: 'Uttara Phalguni', value: 'uttara-phalguni' },
      { label: 'Hasta', value: 'hasta' },
      { label: 'Chitra', value: 'chitra' },
      { label: 'Swati', value: 'swati' },
      { label: 'Vishakha', value: 'vishakha' },
      { label: 'Anuradha', value: 'anuradha' },
      { label: 'Jyeshtha', value: 'jyeshtha' },
      { label: 'Mula', value: 'mula' },
      { label: 'Purva Ashadha', value: 'purva-ashadha' },
      { label: 'Uttara Ashadha', value: 'uttara-ashadha' },
      { label: 'Shravana', value: 'shravana' },
      { label: 'Dhanishtha', value: 'dhanishtha' },
      { label: 'Shatabhisha', value: 'shatabhisha' },
      { label: 'Purva Bhadrapada', value: 'purva-bhadrapada' },
      { label: 'Uttara Bhadrapada', value: 'uttara-bhadrapada' },
      { label: 'Revati', value: 'revati' }
    ];
  }

  getGotras(): { label: string, value: string }[] {
    return [
      { label: 'Agastya', value: 'agastya' },
      { label: 'Angiras', value: 'angiras' },
      { label: 'Atri', value: 'atri' },
      { label: 'Bhardwaj', value: 'bhardwaj' },
      { label: 'Bhrugu', value: 'bhrugu' },
      { label: 'Gautam', value: 'gautam' },
      { label: 'Haritayana', value: 'haritayana' },
      { label: 'Jamadagni', value: 'jamadagni' },
      { label: 'Kashyapa', value: 'kashyapa' },
      { label: 'Kaushika', value: 'kaushika' },
      { label: 'Kaundinya', value: 'kaundinya' },
      { label: 'Krishna', value: 'krishna' },
      { label: 'Kunda', value: 'kunda' },
      { label: 'Maitra', value: 'maitra' },
      { label: 'Parashar', value: 'parashar' },
      { label: 'Sandilya', value: 'sandilya' },
      { label: 'Saraswata', value: 'saraswata' },
      { label: 'Shaunaka', value: 'shaunaka' },
      { label: 'Shandilya', value: 'shandilya' },
      { label: 'Shukla', value: 'shukla' },
      { label: 'Suman', value: 'suman' },
      { label: 'Upamanyu', value: 'upamanyu' },
      { label: 'Vasistha', value: 'vasistha' },
      { label: 'Vishvamitra', value: 'vishvamitra' },
      { label: 'Vydheya', value: 'vydheya' },
      { label: 'Yama', value: 'yama' }
    ];
  }

  getRashis(): { label: string, value: string }[] {
    return [
      { label: 'Mesha', value: 'aries' },
      { label: 'Vrishabha', value: 'taurus' },
      { label: 'Mithuna', value: 'gemini' },
      { label: 'Karkata', value: 'cancer' },
      { label: 'Simha', value: 'leo' },
      { label: 'Kanya', value: 'virgo' },
      { label: 'Tula', value: 'libra' },
      { label: 'Vrishchika', value: 'scorpio' },
      { label: 'Dhanu', value: 'sagittarius' },
      { label: 'Makara', value: 'capricorn' },
      { label: 'Kumbha', value: 'aquarius' },
      { label: 'Meen', value: 'pisces' }
    ];
  }

  getSeva(): { label: string, value: string }[] {
    return [
      { label: 'Ksheerabhishekam', value: 'ksheerabhishekam' },
      { label: 'Archana Sahita Hastodaka', value: 'archanasahithahastodaka' },
      { label: 'Panchamrutham', value: 'panchamrutha' },
      { label: 'Sarva Seva', value: 'sarvaseva' },
      { label: 'Maha Pooja', value: 'mahapooja' }
    ];
  }

  getSamvatsaraList(): DropdownOption[] {
    return [
      { label: 'Nandana', value: 'Nandana' },
      { label: 'Vijaya', value: 'Vijaya' },
      { label: 'Jaya', value: 'Jaya' },
      { label: 'Manmatha', value: 'Manmatha' },
      { label: 'Durmukhi', value: 'Durmukhi' },
      { label: 'Siddharthi', value: 'Siddharthi' }
    ];
  }

  getMaasaList(): DropdownOption[] {
    return [
      { label: 'Ashvija', value: 'Ashvija' },
      { label: 'Kartika', value: 'Kartika' },
      { label: 'Margashirsha', value: 'Margashirsha' },
      { label: 'Pushya', value: 'Pushya' },
      { label: 'Magha', value: 'Magha' },
      { label: 'Phalguna', value: 'Phalguna' },
      { label: 'Chaitra', value: 'Chaitra' },
      { label: 'Vaisakha', value: 'Vaisakha' },
      { label: 'Jyeshtha', value: 'Jyeshtha' },
      { label: 'Ashadha', value: 'Ashadha' },
      { label: 'Shravana', value: 'Shravana' },
      { label: 'Bhadrapada', value: 'Bhadrapada' }
    ];
  }



  addAlert(type: string, message: string): void {
    // primary, secondary, success, danger, warning, info, light, dark
    let duplicate = false;
    if (this.alerts.length > 0) {
      this.alerts.forEach((element => {
        if (element.msg === message) {
          duplicate = true;
          return;
        }
      }));
    }

    if (!duplicate) {
      this.alerts.push({
        type: type,
        msg: message,
        timeout: 3000
      })

    }

  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  showLoader() {
    return this.loading = true;
  }

  hideLoader() {
    return this.loading = false;
  }

}
