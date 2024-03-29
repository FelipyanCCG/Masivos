import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MasivosContext } from '../../Context/index.jsx';
import { Layout } from '../../Components/Layout';
import { IoListCircle } from "react-icons/io5";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";
import { FormConfig } from '../../Components/FormConfig';
import { useConfig } from './useConfig';


/**
 * Genera un comentario de función para el cuerpo de la función dada.
 *
 * @param {object} props - El objeto de props con las siguientes propiedades:
 *   @param {string} title - El título del cuadro.
 *   @param {string} emoji - El emoji del cuadro.
 *
 * @returns {JSX.Element} - El elemento JSX que representa el componente de la caja.
 */
const Box = ({ title, emoji }) => {

  const context = useContext(MasivosContext);

  const { showForm, handleCreate, closeToast, nameButton } = useConfig({ title });
  
  return (
    <>
      <div className='mx-5 mb-6 items-center justify-between flex flex-col rounded-lg shadow-xl border bg-white w-72 h-80'>
        <h2 className='text-6xl mt-10 text-[#0096C8]'>{emoji}</h2>
        <h1 className='text-2xl text-[#0096C8]'>{title}</h1>
        <button
          className='bg-[#0096C8] text-white w-4/6 h-8 rounded transition-colors duration-200 mb-8'
          onClick={handleCreate}
        >
          {nameButton()}
        </button>
      </div>
      {showForm && (
        <FormConfig
          tokenUser={context.tokenUser}
          title={title}
          fields={context.fieldsFormConfig[title]?.Crear?.fields}
          api={context.fieldsFormConfig[title]?.Crear?.api}
          closeToast={closeToast}
        />
      )}
    </>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  emoji: PropTypes.node.isRequired,
};

/**
 * Genera el comentario de función para el cuerpo de la función dada.
 *
 * @return {JSX.Element} El elemento JSX que representa el diseño de configuración.
 */
const Config = () => {

  return (
    <Layout title='Configuracion'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        <Box title={'Usuarios'} emoji={<IoPeopleCircleSharp />} />
        <Box title={'Campañas'} emoji={<IoListCircle />} />
        <Box title={'Cambiar token'} emoji={<IoPeopleCircleSharp />} />
        <Box title={'Usuario por Campaña'} emoji={<FaUsersCog />} />
      </div>
    </Layout>
  );
};

export { Config };