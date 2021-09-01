import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-displayblog',
  templateUrl: './displayblog.component.html',
  styleUrls: ['./displayblog.component.css']
})
export class DisplayblogComponent implements OnInit {

  singleBlog: any;
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.viewBlog();
  }
  viewBlog(){
    this.blog.viewBlog(this.route.snapshot.params['id']).subscribe((result)=>{
      console.log("data is here",result);
      this.singleBlog= result;
      console.log(this.singleBlog);
    })
  }
  viewProfile(id:number){
    this.router.navigate(['profile',id]);
  }
}
