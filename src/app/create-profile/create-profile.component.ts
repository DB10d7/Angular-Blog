import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  createProfiles= new FormGroup({
    name: new FormControl(''),
    profession: new FormControl(''),
    contact: new FormControl('')

  })
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  createProfile(){
    console.warn(this.createProfiles.value);
    this.blog.saveProfile(this.createProfiles.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Profile Added Successfully");
      this.createProfiles.reset();
      this.router.navigate(['profile']);
    })
  }
}
