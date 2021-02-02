function getGrade(score) {
    if(score > 79.99 && score < 100.1)
    {
        return 'A';
    }
    if(score > 59.99 && score < 80)
    {
        return 'B';
    }
    if(score > 49.99 && score < 60)
    {
        return 'C';
    }
    if(score > 44.99 && score < 50)
    {
        return 'D';
    }
    if(score > 24.99 && score < 45)
    {
        return 'E';
    }
    if(score >= 0 && score < 25)
    {
        return 'F';
    }
    else
    {
        return 'Invalid';
    }
}

module.exports = getGrade;
