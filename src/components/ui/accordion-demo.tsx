import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es este sistema?</AccordionTrigger>
        <AccordionContent>
          Una plataforma para gestionar cursos, estudiantes y evaluaciones de
          forma centralizada.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Cómo inicio sesión?</AccordionTrigger>
        <AccordionContent>
          Usá tu correo institucional y la contraseña asignada por el
          administrador. Podés cambiarla desde tu perfil.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Puedo tener múltiples roles?</AccordionTrigger>
        <AccordionContent>
          Sí. Un usuario puede ser docente en un curso y estudiante en otro. El
          sistema adapta la vista según el contexto activo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
