  // get time span on date_id basis
  startTime: any; endTime: any; startDate: any; endDate: any; timeDiff: any; hh: any; mm: any; ss: any;
  timeSpan: any;

  public getTimeSpan(startTime, endTime, tokens){
    this.startTime = startTime;
    this.endTime = endTime;

    this.startDate = new Date("January 1, 1970 " + this.startTime);
    this.endDate = new Date("January 1, 1970 " + this.endTime);
    this.timeDiff = Math.abs(this.startDate - this.endDate);

    this.hh = Math.floor(this.timeDiff / 1000 / 60 / 60);
    if(this.hh < 10) {
      this.hh = '0' + this.hh;
    }
    this.timeDiff -= this.hh * 1000 * 60 * 60;
    this.mm = Math.floor(this.timeDiff / 1000 / 60);
    if(this.mm < 10) {
      this.mm = '0' + this.mm;
    }
    this.timeDiff -= this.mm * 1000 * 60;
    this.ss = Math.floor(this.timeDiff / 1000);
    if(this.ss < 10) {
      this.ss = '0' + this.ss;
    }

    return this.timeSpan = {
      hh: this.hh,
      mm: this.mm,
      ss: this.ss,
      per_hour: this.hh/tokens,
      per_minute: this.mm/tokens,
      per_second: this.ss/tokens
    }

  }
