import { Component,OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'url-code',
    templateUrl: './urlencodedecode.template.html',
    styleUrls: ['./urlencodedecode.style.css']
})
export class UrlEncodeDecodeComponent implements OnInit {
    constructor(private titleService:Title) { };

    ngOnInit() {
        this.titleService.setTitle ('VivRan || URL Encoder/Decoder');
    }

    model = { url: '', orginalUrl:'' };


    // events
    onTyping(event: any) {
        this.model.url = event.target.value;
    }

    encodeUrl() {
        this.model.orginalUrl = this.model.orginalUrl == '' ? this.model.url : this.model.orginalUrl;
        this.model.url = encodeURIComponent(this.model.url).replace(/'/g, "%27").replace(/"/g, "%22");
    }


    decodeUrl() {
        this.model.url = decodeURIComponent(this.model.url.replace(/\+/g, " "));
    }

    reset () {
        this.model.url = this.model.orginalUrl;
        this.model.orginalUrl = '';
    }

    clear () {
        this.model.orginalUrl = '';
        this.model.url = '';
    }

    //debug
    get diagnostic() { return JSON.stringify(this.model); }
}