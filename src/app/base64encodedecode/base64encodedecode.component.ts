import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'base64-code',
    templateUrl: './base64encodedecode.template.html',
    styleUrls: ['./base64encodedecode.style.css']
})
export class Base64EncodeDecodeComponent implements OnInit {
    constructor(private titleService: Title) {
    };

    ngOnInit() {
        this.titleService.setTitle('VivRan Base64 Encoder/Decoder');
    }

    model = { str: '', originalStr: '' };


    // events
    onTyping(event: any) {
        this.model.str = event.target.value;
    }

    encodestr() {
        this.model.originalStr = this.model.originalStr == '' ? this.model.str : this.model.originalStr;
        this.model.str = btoa (this.model.str);
    }
    toSolidBytes(match, p1) {
        return String.fromCharCode(parseInt('0x') + p1);
    }

    decodestr() {
        this.model.str = atob (this.model.str);
    }

    reset() {
        this.model.str = this.model.originalStr;
        this.model.originalStr = '';
    }

    clear() {
        this.model.originalStr = '';
        this.model.str = '';
    }

    //debug
    get diagnostic() { return JSON.stringify(this.model); }
}