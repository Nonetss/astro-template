import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
	return (
		<div className="grid gap-5 sm:grid-cols-2">
			<div className="space-y-1.5">
				<Label>Rol</Label>
				<Select>
					<SelectTrigger className="w-full rounded-none">
						<SelectValue placeholder="Seleccionar rol…" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="admin">Administrador</SelectItem>
							<SelectItem value="teacher">Docente</SelectItem>
							<SelectItem value="student">Estudiante</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="space-y-1.5">
				<Label>Deshabilitado</Label>
				<Select disabled>
					<SelectTrigger className="w-full rounded-none">
						<SelectValue placeholder="No disponible" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="x">Opción</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
