import {Pipe} from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNum: string) {
    let newStr = "";
    let i = 0;

    rawNum = rawNum.replace(/\s/g, '');

    if (rawNum.charAt(0) == "+") {
      newStr = "+";
      rawNum = rawNum.substr(1);
    }

    for (; i < Math.floor(rawNum.length / 3); i++) {
      newStr = newStr + rawNum.substr(i * 3, 3) + " ";
    }

    return newStr + rawNum.substr(i * 3);
  }
}
