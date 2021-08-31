import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';


@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {


  createBlogs= new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
    profileId: new FormControl('')

  })
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createBlog(){
    console.warn(this.createBlogs.value);
    this.blog.saveBlog(this.createBlogs.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Blog Added Successfully");
      this.createBlogs.reset();
      this.router.navigate(['blog']);
    })
  }
}
