import { Component, OnInit , Output, EventEmitter, ViewChild, TemplateRef} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewConatacgManagerComponent } from '../new-conatacg-manager/new-conatacg-manager.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();
  @ViewChild('newcontact', {static: true }) private dialog_template: TemplateRef<any>;
  dialogRef: MatDialogRef<NewConatacgManagerComponent>;

  constructor( public dialog: MatDialog, private snackbar: MatSnackBar,
              private router: Router) { }
  onclickhander() {
    this.sidenavToggle.emit();
  }
  openContactDialog() {
    this.dialogRef = this.dialog.open(NewConatacgManagerComponent ,{
      width: '80%',
           
    })
    this.dialogRef.afterClosed().subscribe(result =>{
      console.log('closed', result)
      if(result){
        this.openSnackBar("Contact Added", "Navigate")
        .onAction().subscribe(data => {
          this.router.navigate(['contact-manager', result.id])
        })
        
      }
    })
  }
  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return  this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit(): void { 
  }

}
