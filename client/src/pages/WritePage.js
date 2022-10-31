import React from 'react';
import '../utils/WritePage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function WritePage() {
  return (
    <Form>
    <div className="App">
      <div className='form-wrapper'>
      <Form.Select aria-label="Floating label select example" text-align="center">
      <option>게시판을 선택해주세요</option>
      <option value="1">ALL</option>
      <option value="2">V.I.P</option>
    </Form.Select>
        <input className="title-input" type='text' placeholder='제목을 입력하세요.' />
        <CKEditor
                    editor={ ClassicEditor }
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
      </div>
      </div>
    <Button variant="primary" type="submit">
      등록
    </Button>
  </Form>
);
}