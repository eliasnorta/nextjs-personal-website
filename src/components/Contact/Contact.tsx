import React, { forwardRef, useContext } from "react";
import style from "./contact.module.css";
import buttonStyle from "../Button/button.module.css";
import MotionWrapper from "../Animations/MotionWrapper";

const Contact = ({ id }: { id: string }) => {
  return (
    <MotionWrapper>
      <section id={id} className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>Get in touch</h1>
          <div className={style.form_container}>
            <form
              action="https://formsubmit.co/6c95a40085637e3625e02451c3c8719e"
              method="POST"
            >
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
                <button className={buttonStyle.container} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

Contact.displayName = "Contact";

export default Contact;
