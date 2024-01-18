import { FaUser, FaUserPlus } from 'react-icons/fa';

export const SidebarData = [
    {
        title : 'Crear Usuario',
        path  : '/',
        icon  : <FaUserPlus />,
        cName : 'nav-text',
    },
    {
        title : 'Información de Usuarios',
        path  : '/users-dashboard',
        icon  : <FaUser />,
        cName : 'nav-text',
    },
];