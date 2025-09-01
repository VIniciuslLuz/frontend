# Script para limpar COMPLETAMENTE o histórico do Git
# ATENÇÃO: Este script vai reescrever o histórico!

Write-Host "🚨 LIMPEZA COMPLETA DO HISTÓRICO DO GIT" -ForegroundColor Red
Write-Host "Este script vai remover TODOS os commits com chaves do Firebase!" -ForegroundColor Yellow

# Confirmação
$confirma = Read-Host "Tem certeza? Digite 'SIM' para continuar"
if ($confirma -ne "SIM") {
    Write-Host "Operação cancelada!" -ForegroundColor Green
    exit
}

Write-Host "🧹 Iniciando limpeza..." -ForegroundColor Cyan

# 1. Remove os commits problemáticos
git reset --hard 9780267

# 2. Limpa o repositório
git clean -fd

# 3. Força o push para sobrescrever o histórico
Write-Host "📤 Fazendo push forçado..." -ForegroundColor Yellow
git push --force-with-lease origin master

Write-Host "✅ Histórico limpo com sucesso!" -ForegroundColor Green
Write-Host "⚠️ As chaves do Firebase foram REMOVIDAS do histórico!" -ForegroundColor Yellow
