import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
  isEqual,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '../../services/api';

import { Container, Time } from './styles';
import Header from '../../components/Header';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );
  // quando o date for manipulado eu quero calcular

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        // vou comparar apenas horários cheios
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00hs`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date, range]);

  // reduzindo a data em 1 dia
  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  // aumentando a data em 1 dia
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <>
      <Header />
      <Container>
        <header>
          <button type="button" onClick={handlePrevDay}>
            <MdChevronLeft color="#fff" size={36} />
          </button>
          <strong>{dateFormatted}</strong>
          <button type="button" onClick={handleNextDay}>
            <MdChevronRight color="#fff" size={36} />
          </button>
        </header>

        <ul>
          {schedule.map((time) => (
            <Time
              past={time.past}
              key={time.time}
              available={!time.appointment}
            >
              <strong>{time.time}</strong>
              <span>
                {time.appointment
                  ? time.appointment.user.name
                  : 'Horário Disponível'}
              </span>
            </Time>
          ))}
        </ul>
      </Container>
    </>
  );
}
