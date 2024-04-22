function getDifferentDays (date1: Date, date2: Date): number {
    const timeDiff = Math.abs (date2.getTime() - date1.getTime());
    const diffDays = Math.ceil (timeDiff / (1000 * 3600 * 24 ));
    return diffDays;
} 
    const date1: Date = new Date ('2024-03-19');
    const date2: Date = new Date ('2024-01-21');

    const DifferentDays: number = getDifferentDays(date1, date2);

    console.log(DifferentDays);
    