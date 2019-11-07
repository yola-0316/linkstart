import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

export default function Navigation() {
  return (
    <div className="navigation">
      <section className="head">
        <PrimaryButton>新建</PrimaryButton>
      </section>
      <section className="body" />
      <div className="modal">
        <form action="">
          <div>
            <label htmlFor="">类别</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">名称</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">链接</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">描述</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}
