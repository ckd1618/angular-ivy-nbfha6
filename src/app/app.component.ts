import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arr;
  lengthOfArr;
  currentBackup;
  index = 0;
  greek = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega"];
  armenian = ["ah / a:", "b", "g", "d", "ye", "z", "e / eh", "uh / ə", "t (aspirated)", "zh / 3", "i", "l", "kh / x", "ts (non-aspirated)", "k", "h", "dz", "gh / ŧ", "tch", "m", "y", "n", "sh / ∫", "vo", "ch", "p", "dj", "r (strong)", "s", "v", "t", "r (soft)", "ts (aspirated)", "oo", "p (aspirated)", "q (aspirated)", "yev", "o", "f"];
  backupArrGreek = [...this.greek];
  backupArrArmenian = [...this.armenian];
  
  
  constructor() {
    this.chooseLang(this.backupArrGreek);
  }

  fun1 = () => {
    var idx = Math.floor(Math.random() * this.arr.length);
    this.index = idx;
  }

  fail = () => {
    if (this.lengthOfArr < 2) {
      return ;
    } else {
      var prevVal = this.arr[this.index];
      this.swapForLastAndPop(this.index);
      this.fun1();
      this.arr.push(prevVal);
    }
  }

  success = () => {
    this.swapForLastAndPop(this.index);
    this.lengthOfArr = this.arr.length;
    this.fun1();
  }

  restart = () => {
    // window.location.reload();
    this.arr = [...this.currentBackup];
    this.lengthOfArr = this.arr.length;
    this.fun1();
  }

  swapForLastAndPop = (idx1) => {
    [this.arr[idx1], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[idx1]];
    this.arr.pop();
  }

  chooseLang(backup) {
    this.arr = [...backup];
    this.currentBackup = backup;
    this.lengthOfArr = this.arr.length;
    this.fun1();
  }

}
