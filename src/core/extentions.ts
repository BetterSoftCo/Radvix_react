enum Status {
    OnGoing,
    Delayed,
    OnHold,
    Completed,
  }
  declare global {  
    interface Number {  
     isStatus(): string; 
    }  
   }
  Number.prototype.isStatus = function(): string {  
    switch (Number(this)) {
        case Status.OnGoing:
            return 'OnGoing'
        case Status.Delayed:
            return 'Delayed'
        case Status.OnHold:
            return 'OnHold'
        case Status.Completed:
            return 'Completed'
        default:
            return ''
    };
   }
   export {}