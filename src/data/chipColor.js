

const getChipColors = () => {

    const chipColors= {

        rejected: { color: 'red', icon: 'cancel' },
        rescheduled: { color: 'blue', icon: 'pending_actions' },
        approved: { color: 'secondary', icon: 'done_outline' },
        pending: { color: 'orange', icon: 'done_outline' },
        canceled: { color: 'red-11', icon: 'done_outline' },
        completed: { color: 'green', icon: 'done_outline' },
        

    }


   

    return { chipColors }
}

export  default getChipColors