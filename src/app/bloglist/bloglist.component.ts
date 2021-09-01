import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {


  listblog: any;
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.blog.getBlog().subscribe((resp)=>{

      this.listblog = resp;
      })
  }
  viewBlog(id:number){
    this.router.navigate(['blog',id]);
  }
  deleteBlog(id:number){

    this.blog.deleteBlog(id).subscribe((res)=>{
      console.warn("data is here",res);
      alert("Delete Blog");
      this.ngOnInit();
    })
  }
  updateBlog(id:number){
    this.router.navigate(['blog/update',id]);
  }
  createBlog(){
    this.router.navigate(['blog/add']);
  }
}
