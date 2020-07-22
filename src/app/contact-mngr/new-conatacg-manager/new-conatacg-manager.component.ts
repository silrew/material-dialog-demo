import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
import { FormControl , Validators} from  '@angular/forms';
import { UserService } from '../services/user.service';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-new-conatacg-manager',
  templateUrl: './new-conatacg-manager.component.html',
  styleUrls: ['./new-conatacg-manager.component.scss']
})
export class NewConatacgManagerComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  user: User;
  name = new FormControl('', [Validators.required]);
  avatars = ["https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w",
             "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60 100w",
             "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w",
             "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w" 
]
   constructor(public dialogRef: MatDialogRef<NewConatacgManagerComponent>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData,
     private userservice: UserService
    ) { }

  ngOnInit(): void {
    this.user = new User();
  }
 
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }
  }

   save() {
    this.userservice.addUser(this.user);
    this.dialogRef.close(this.user);
  }
  dismiss(){this.dialogRef.close(null);
 }
}
