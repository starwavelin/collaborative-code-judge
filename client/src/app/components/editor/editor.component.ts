import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  defaultContent = {
    'Java':
    `public class Solution {
  public static void main(String[] args) {
    //Type your code here
  }
}`
  };

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.session.setMode('ace/mode/java');

    this.editor.setValue(this.defaultContent['Java']);

  }

}
