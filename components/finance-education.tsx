export function FinanceEducation(){
  return(
    <section id="educacao-financeira" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full">
          Educação Financeira
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
          Crédito Consciente
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Aprenda a usar o crédito de forma inteligente e responsável
        </p>
      </div>
    </div>
    
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
      <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-md hover:shadow-lg transition-all">
        <div className="p-3 rounded-full bg-yellow-500/10">
          <svg className="h-10 w-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
          Conheça seu orçamento
        </h3>
        <p className="text-center text-muted-foreground">Antes de contratar um empréstimo, entenda quanto você pode pagar mensalmente sem comprometer seu orçamento.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-md hover:shadow-lg transition-all">
        <div className="p-3 rounded-full bg-amber-500/10">
          <svg className="h-10 w-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
          Compare as taxas
        </h3>
        <p className="text-center text-muted-foreground">Pequenas diferenças nas taxas de juros podem representar grandes economias no valor total pago.</p>
      </div>
      
      <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-md hover:shadow-lg transition-all">
        <div className="p-3 rounded-full bg-orange-500/10">
          <svg className="h-10 w-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
           Múltiplos empréstimos
        </h3>
        <p className="text-center text-muted-foreground">Ter vários empréstimos ao mesmo tempo pode comprometer sua saúde financeira e aumentar o risco de endividamento.</p>
      </div>
    </div>
  </div>
</section>
  )
}