interface Linux {
  type: 'Linux';
  linuxUserInfo: '极客';
}

interface Mac {
  type: 'Mac';
  macUserInfo: '极客+1';
}

interface Windows {
  type: 'Windows';
  windowsUserInfo: '极客+2';
}

function getUserInfo(os: Linux | Mac | Windows) {
  switch (os.type) {
    case 'Linux': {
      console.log(os.linuxUserInfo);
      break;
    }

    case 'Mac': {
      console.log(os.macUserInfo);
      break;
    }

    case 'Windows': {
      console.log(os.windowsUserInfo);
      break;
    }
  }
}

getUserInfo({type: 'Linux', linuxUserInfo: '极客'});

class Animal {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  static isAnimal(a: Animal): boolean {
    return a instanceof Animal;
  }
  move(distance: number) {
    console.log(`Animal moved ${distance}`);
  }
}

new Animal('Tom');
