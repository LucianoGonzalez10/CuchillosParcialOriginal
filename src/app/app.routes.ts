import { Routes } from '@angular/router';
import { AddCuchilloComponent } from './components/add-cuchillo/add-cuchillo.component';
import { ListCuchilloComponent } from './components/list-cuchillo/list-cuchillo.component';
import { VerDetallesCuchilloComponent } from './components/ver-detalles/ver-detalles.component';
import { UpdateCuchilloComponent } from './components/update-cuchillo/update-cuchillo.component';

export const routes: Routes = [
    {
        path: 'agregar-cuchillo',
        component: AddCuchilloComponent
    },
    {
        path: 'lista-cuchillos',
        component: ListCuchilloComponent
    },
    {
        path: 'verDetalles/:id',
        component: VerDetallesCuchilloComponent
    },
    {
        path: 'modificar/:id',
        component: UpdateCuchilloComponent
    }
];
