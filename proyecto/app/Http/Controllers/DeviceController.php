<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Register;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceController extends Controller
{
protected $regFiltrados;

public function __construct(Register $regFiltrados){
    $this->regFiltrados = $regFiltrados;
}
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $regFiltrados = $this->regFiltrados->obtenerRegistrosFiltrados(auth()->user()->id);
        return Inertia::render('Monitor', [
            'devices' => Device::with('user:id')->where('user_id', auth()->user()->id)->get(),
            'registers' => $regFiltrados,//Register::where('device_id', function(Builder $query){})->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'serial' => 'required|string|max:255',
        ]);
 
        $request->user()->devices()->create($validated);
 
        return redirect(route('device.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        //
    }
}
