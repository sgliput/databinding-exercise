import { Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.Emulated //Emulated is the default; also None or Native (uses Shadow DOM)
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("Constructor called.");
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log("ngOnChanges called.");
     console.log(changes);
   }

  ngOnInit() {
    console.log("ngOnInit called.");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called.");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called.");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called.");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called.");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called.");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called.");
  }
}
