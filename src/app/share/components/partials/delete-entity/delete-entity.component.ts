import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-delete-entity',
  standalone: true,
  imports: [
    MatProgressBar,
    NgIf,
    MatButton
  ],
  templateUrl: './delete-entity.component.html',
  styleUrl: './delete-entity.component.scss'
})
export class DeleteEntityComponent implements OnInit {

  viewLoading = false;

  constructor(
    public _dialogRef: MatDialogRef<DeleteEntityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this._dialogRef.close();
  }

  onYesClick(): void {
    this.viewLoading = true;
    setTimeout(() => {
      this._dialogRef.close(true);
    }, 2500);
  }
}
