import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  singleProfile: any;
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    this.viewProfile();
  }


  viewProfile(){
    this.blog.viewProfile(this.route.snapshot.params['id']).subscribe((result)=>{
      console.log("data is here",result);
      this.singleProfile= result;
      console.log(this.singleProfile);
    })
  }
  deleteProfile(id:number){
    this.blog.deleteProfile(id).subscribe((res)=>{
      console.warn("data is here",res);
      alert("Delete Profile");
      this.ngOnInit();
      this.router.navigate(['profile']);
    })
  }
}
