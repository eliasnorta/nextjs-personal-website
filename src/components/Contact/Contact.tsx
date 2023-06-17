import React from "react";
import style from "./contact.module.css";
import Button from "../Button/button";

const Contact = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Get in touch</h1>
        <div className={style.form_container}>
          <form action="" method="POST">
            <div className={style.input_container}>
              <label>
                Your Name <span>*</span>
              </label>
              <input type="text" name="name" required />
            </div>
            <div className={style.input_container}>
              <label>
                Email <span>*</span>
              </label>
              <input type="email" name="email" required id="" />
            </div>
            <div className={style.input_container}>
              <label>
                Subject <span>*</span>
              </label>
              <input type="text" name="subject" id="" required />
            </div>
            <div className={style.input_container}>
              <label>
                Your message <span>*</span>
              </label>
              <textarea name="Message" id="" required cols={20} rows={6} />
            </div>
            <div className={style.button_conainer}>
              <Button text="Submit" type="submit" url="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
