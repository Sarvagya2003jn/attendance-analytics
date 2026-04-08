const { analyzeAttendance } = require('../src/app.js');

describe('Attendance Analytics Logic', () => {
    it('should calculate attendance rate correctly', () => {
        const records = [
            { id: 1, status: 'Present' },
            { id: 2, status: 'Absent' },
            { id: 3, status: 'Present' },
            { id: 4, status: 'Present' }
        ];
        
        const result = analyzeAttendance(records);
        expect(result.status).toBe('success');
        expect(result.totalRecords).toBe(4);
        expect(result.attendanceRate).toBe(75);
        expect(result.prediction).toBe('Good Standing');
    });

    it('should flag At Risk students', () => {
        const records = [
            { id: 1, status: 'Present' },
            { id: 2, status: 'Absent' },
            { id: 3, status: 'Absent' }
        ];
        
        const result = analyzeAttendance(records);
        expect(result.prediction).toBe('At Risk');
    });

    it('should handle empty records', () => {
        const result = analyzeAttendance([]);
        expect(result.status).toBe('error');
    });
});
