/*eslint-disable*/
import classNames from "classnames";
import React from "react";
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <section className="header relative pt-16 items-center flex">
      <div className={classNames('container', s.contentBlock)}>
        <div>
          <h3 className={s.title}>Зв'яжіться з нами</h3>
          <ul className={s.contactsList}>
            <li>
              <div>
                <i class="fas fa-mobile-alt"></i>
                <span>Телефон</span> 
              </div>
              <a href="tel:+380985887777">+38-098-588-77-77</a>
            </li>
            <li>
              <div>
                <i class="fas fa-at"></i>
                <span>Ел. пошта</span>
              </div>
              <a href="mailto:admins@gmail.com">admins@gmail.com</a>
            </li>
            <li>
              <div>
                <i class="fab fa-telegram-plane"></i>
                <span>Telegram</span>
              </div> 
              <a href="https://telegram.me/gs_admin">gs_admin</a>
            </li>
            <li>
              <div>
                <i class="fab fa-viber"></i>
                <span>Viber</span> 
              </div> 
              <a href="viber://chat?number=%2B4957777777">+38-098-588-77-77</a>
            </li>
            <li>
              <div>
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </div> 
              <a href="https://www.messenger.com/t/gs.admin.3">Адміністратори</a>
            </li>
          </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.400426248593!2d30.5438723708993!3d50.4298920814164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0c044dd735%3A0x77940fa521b6fd28!2z0JLRltC50YHRjNC60L7QstC40Lkg0ZbQvdGB0YLQuNGC0YPRgiDRgtC10LvQtdC60L7QvNGD0L3RltC60LDRhtGW0Lkg0YLQsCDRltC90YTQvtGA0LzQsNGC0LjQt9Cw0YbRltGXINGW0LzQtdC90ZYg0JPQtdGA0L7Rl9CyINCa0YDRg9GC!5e0!3m2!1suk!2sua!4v1637746230355!5m2!1suk!2sua" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
}
