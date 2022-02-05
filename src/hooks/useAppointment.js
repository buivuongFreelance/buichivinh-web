import createPersistedState from 'use-persisted-state';
const useAppointmentState = createPersistedState('sybelAppointment');

const useAppointment = () => {
    const [appointment, setAppointment] = useAppointmentState(null);
    return {
        data: appointment,
        setup: (obj) => setAppointment(obj),
        delete: () => setAppointment(null),
    };
};

export default useAppointment;