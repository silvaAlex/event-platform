import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: "live" | "class";
}

export function Lesson(lesson: LessonProps) {
  const isLessonAvaliable = isPast(lesson.avaliableAt);
  const avaliableDateFormatted = format(
    lesson.avaliableAt,
    "EEEE ' •' d' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <a href="#">
      <span className="text-gray-300">{avaliableDateFormatted}</span>
      <div className="rounded border p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className="text-sm font-medium text-blue-500 flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {lesson.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-2 block">{lesson.title}</strong>
      </div>
    </a>
  );
}


