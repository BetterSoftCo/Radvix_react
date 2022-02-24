enum Status {
    OnGoing,
    Delayed,
    OnHold,
    Completed,
  }
  enum Priority {
    Low,
    Medium,
    High
  }
  declare global {  
    interface Number {  
     isStatus(): string; 
     isPriority(): string; 
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
   Number.prototype.isPriority = function(): string {  
    switch (Number(this)) {
        case Priority.Low:
            return 'Low'
        case Status.Delayed:
            return 'Delayed'
        case Priority.Medium:
            return 'Medium'
        case Priority.High:
            return 'High'
        default:
            return ''
    };
   }
   export {}