var student = {
    GradeRecord: {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        E: 40,
        F: 0
    },
    id: Number,
    Name: String,
    subject: {
        myanmar: Number,
        english: Number,
        maths: Number,
        science: Number,
        geography: Number,
        history: Number,
    },
    lowestMark() {
        let smallest = Number;
        for (const [mark] of Object.entries(this.subject)) {
            if (typeof mark !== 'number') continue;
            
            if (mark < smallest) {
                smallest = mark; 
            }
        }
        
        return smallest
    },
    average() {
        return Math.round((this.subject.myanmar + this.subject.english + this.subject.maths + this.subject.science + this.subject.geography + this.subject.history) / 6)
    },
    grade() {
        if (this.average() >= this.GradeRecord.A) {
            return "A"
        } else if (this.average() >= this.GradeRecord.B) {
            return "B"
        } else if (this.average() >= this.GradeRecord.C) {
            return "C"
        } else if (this.average() >= this.GradeRecord.D) {
            return "D"
        } else if (this.average() >= this.GradeRecord.E) {
            return "E"
        } else {
            return "F"
        }
    },
}
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values and assign to student object
    student.Name = document.getElementById('name').value;
    student.id = document.getElementById('id').value;
    student.subject.myanmar = Number(document.getElementById('myanmar').value);
    student.subject.english = Number(document.getElementById('english').value);
    student.subject.maths = Number(document.getElementById('maths').value);
    student.subject.science = Number(document.getElementById('science').value);
    student.subject.geography = Number(document.getElementById('geography').value);
    student.subject.history = Number(document.getElementById('history').value);
    
    // Display results
    document.getElementById('resultName').textContent = student.Name;
    document.getElementById('resultId').textContent = student.id;
    document.getElementById('resultAverage').textContent = student.average().toFixed(2);
    document.getElementById('resultGrade').textContent = student.grade();
    
    // Show results section
    document.getElementById('results').style.display = 'block';
});