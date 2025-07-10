import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="accordion-container">
      <h2 className="accordion-header">Ответы на вопросы</h2>
      <div className="accordion-block">
        <button className="accordion-toggle" onClick={() => toggle(0)}>
          <span>С чего начать работу с 1С-Товары?</span>
          <span className={`arrow ${activeIndex === 0 ? "rotate" : ""}`}>▼</span>
        </button>
      </div>
      <div className="accordion-block">
        <button className="accordion-toggle">
          <span>Как подключить 1С-Ритейл Чекер и 1С-Товары?</span>
          <span className={`arrow ${activeIndex === 1 ? "rotate" : ""}`}>▼</span>
        </button>
        {activeIndex === 1 && (
          <div className="accordion-content">Для этого подключите бесплатный модуль "чекер" в 1С-Ритейл Менеджер. Каждую неделю чек подскажет, где ваши потери и рекомендации: - какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок; - какие товары не стоят на лучших местах и нуждаются в перераспределении; - какие товары следует пересчитать, чтобы быть уверенным в правильности учета.</div>)}
      </div>
      <div className="accordion-block">
        <button className="accordion-toggle" onClick={() => toggle(2)}>
          <span>Средний чек, о чем нам может рассказать?</span>
          <span className={`arrow ${activeIndex === 2 ? "rotate" : ""}`}>▼</span>
        </button>
      </div>
      <div className="accordion-block">
        <button className="accordion-toggle">
          <span>Сценарии автозаказа сервиса 1С-Товары</span>
          <span className={`arrow ${activeIndex === 3 ? "rotate" : ""}`}>▼</span>
        </button>
      </div>
      <div className="accordion-block">
        <button className="accordion-toggle">
          <span>Как подключить 1С-Ритейл Чекер и 1С-Товары?</span>
          <span className={`arrow ${activeIndex === 4 ? "rotate" : ""}`}>▼</span>
        </button>
      </div>
      <div className="accordion-block">
        <button className="accordion-toggle">
          <span>Методы и формулы расчета торговой наценки</span>
          <span className={`arrow ${activeIndex === 5 ? "rotate" : ""}`}>▼</span>
        </button>
      </div>
    </div>
  );
}
