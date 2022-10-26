import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function formatDate(date: Date, options: string) {
  const createDate = new Date(date);
  const availableDateFormatted = format(createDate, `${options}`, {
    locale: ptBR,
  });

  return availableDateFormatted;
}

export { formatDate };
