{
    /**
     * Intersection Types: &
     */

    type Student = {
        name: string
        score: number
    }

    type Worker = {
        employeeId: number
        work: () => void;
    }

    function InternWorker(person: Student & Worker){
        console.log(person.name, person.employeeId, person.score)
    }

    InternWorker({
        name: 'Park',
        score: 120,
        employeeId: 1,
        work: () => {}
    })
}   