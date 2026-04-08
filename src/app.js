// Mock AI-Powered Analytics logic for the Dashboard
const analyzeAttendance = (attendanceRecords) => {
    if (!attendanceRecords || attendanceRecords.length === 0) {
        return { status: 'error', message: 'No records provided' };
    }

    const present = attendanceRecords.filter(record => record.status === 'Present').length;
    const total = attendanceRecords.length;
    const attendancePercentage = (present / total) * 100;

    return {
        status: 'success',
        totalRecords: total,
        attendanceRate: attendancePercentage,
        prediction: attendancePercentage < 75 ? 'At Risk' : 'Good Standing'
    };
};

module.exports = { analyzeAttendance };
