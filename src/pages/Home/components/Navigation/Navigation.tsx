import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {
  PrimaryButton,
  DefaultButton,
  TextField,
  Dialog,
  DialogFooter,
  DocumentCard,
  DocumentCardActivity,
} from 'office-ui-fabric-react';
import { Form, Field } from 'react-final-form';

interface ILink {
  category?: string;
  name: string;
  link: string;
  desc?: string;
}

const required: <T>(x: T) => undefined | 'Required' = value => (value ? undefined : 'Required');

function Navigation(props: any) {
  const [dialogHidden, setDialogHidden] = useState(true);
  const [links, setLinks] = useState<Array<ILink>>([]);
  const toggleDialog = useCallback(isHidden => {
    setDialogHidden(isHidden);
  }, []);

  return (
    <div className="ms-Grid" style={{ width: '1080px', margin: 'auto' }}>
      <section className="head">
        <PrimaryButton onClick={() => toggleDialog(false)}>新建</PrimaryButton>
      </section>
      <h1>The count is: {props.links.allIds}</h1>
      <button onClick={props.add}>Add 1</button>
      {/* <button onClick={props.incrementAsync}>Add 1 Async</button> */}
      <section className="body">
        {links.map((value, index) => {
          return (
            <DocumentCard key={value.link + index}>
              <DocumentCardActivity activity="xxx" people={[{ name: 'aaa', profileImageSrc: '' }]} />
            </DocumentCard>
          );
        })}
      </section>

      <AddLinkDialog
        hidden={dialogHidden}
        toggleHidden={(e: any) => toggleDialog(true)}
        onLinkAdd={(link: ILink) => {
          setLinks((s: ILink[]) => s.concat(link));
        }}
      ></AddLinkDialog>
    </div>
  );
}

export default connect(
  (state: any) => ({
    links: state.links,
  }),
  (dispatch: any) => ({
    add: () => dispatch.links.add({ idToAdd: 1, category: 'x', name: 'a', link: 'b', desc: 'c' }),
  })
)(Navigation);

interface IAddLinkDialog {
  hidden: boolean;
  toggleHidden: any;
  onLinkAdd: any;
}
function AddLinkDialog({ hidden, toggleHidden, onLinkAdd }: IAddLinkDialog) {
  return (
    <Dialog
      hidden={hidden}
      dialogContentProps={{
        title: '新建导航链接',
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <Form
        onSubmit={values => {
          console.log(values);
          onLinkAdd(values);
        }}
        render={({ handleSubmit, submitting, pristine }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="category">{({ input, meta }) => <TextField label="类别" {...input}></TextField>}</Field>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <>
                    <TextField label="名称" {...input} required errorMessage={meta.touched && meta.error}></TextField>
                  </>
                )}
              </Field>
              <Field name="link" validate={required}>
                {({ input, meta }) => (
                  <>
                    <TextField label="链接" {...input} required errorMessage={meta.touched && meta.error}></TextField>
                  </>
                )}
              </Field>
              <Field name="desc">{({ input, meta }) => <TextField label="描述" {...input}></TextField>}</Field>
              <DialogFooter>
                <PrimaryButton onClick={event => handleSubmit(event as any)} disabled={submitting || pristine}>
                  Ok
                </PrimaryButton>
                <DefaultButton onClick={toggleHidden}>Cancel</DefaultButton>
              </DialogFooter>
            </form>
          );
        }}
      ></Form>
    </Dialog>
  );
}
