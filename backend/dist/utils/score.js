export function calculatePercentage(obtained, total) {
    if (total <= 0) {
        throw new Error("Total marks must be greater than 0");
    }
    return (obtained / total) * 100;
}
//# sourceMappingURL=score.js.map