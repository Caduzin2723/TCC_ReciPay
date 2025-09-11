import database from "infra/database";

export async function sum(res: string) {
    try {
        const result = await database.query("SELECT 1 + 1 AS sum;");
        const soma = result.rows[0].sum; 
        
        return res.json({
            somando: soma,
        });
    } catch (error) {
        console.error("Erro:", error);
        return NextResponse.json({
            error: "Erro ao calcular a soma",
        }, { status: 500 });
    }
}