import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; //Para usar el css del componente
import { School, Computer, SettingsPhone } from "@mui/icons-material";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#21325e">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Unidad Educativa Vicente Fierro
          </h3>
          <p>Diploma: Bachelor of Consumer Electronics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<Computer />}
        >
          <h3 className="vertical-timeline-element-title">
            Servicio Integrado de Seguridad SIS ECU 911
          </h3>
          <p>Prácticas pre profesionales</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<SettingsPhone />}
        >
          <h3 className="vertical-timeline-element-title">
            Universidad Politécnica Estatal del Carchi
          </h3>
          <p>Vinculación con la Sociedad - Call Center</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2022"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Universidad Politécnica Estatal del Carchi
          </h3>
          <p>Diploma: Computing Science Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
