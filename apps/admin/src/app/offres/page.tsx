import { db } from '@miloud-sabri/database';
export const dynamic = 'force-dynamic';
export default async function OffersPage() {
 const packages = await db.package.findMany({ include: { destination: true }, orderBy: { createdAt: 'desc' } });
 return <main className='min-h-screen bg-cream p-6 md:p-10'><div className='mx-auto max-w-7xl'><a href='/' className='text-sm text-muted'>← Dashboard</a><h1 className='mt-8 text-4xl font-semibold text-navy'>Offres</h1><div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>{packages.map((item)=><div key={item.id} className='glass rounded-3xl p-6'><p className='text-sm text-muted'>{item.destination.name}</p><h2 className='mt-2 text-xl font-semibold text-navy'>{item.title}</h2><p className='mt-2 text-sm text-muted'>{item.durationDays} jours · {item.priceDzd.toString()} DZD</p><span className='mt-4 inline-block rounded-full bg-navy/10 px-3 py-1 text-xs'>{item.active ? 'Active' : 'Inactive'}</span></div>)}</div></div></main>;
}